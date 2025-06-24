import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import Parser from "rss-parser";

export async function registerRoutes(app: Express): Promise<Server> {
  // RSS feed for Substack posts
  app.get("/api/substack-feed", async (req, res) => {
    try {
      const parser = new Parser();
      const feed = await parser.parseURL('https://feeds.simplecast.com/54nAGcIl');
      
      const posts = feed.items?.slice(0, 10).map(item => ({
        title: item.title || '',
        description: item.contentSnippet || item.content || '',
        pubDate: item.pubDate || '',
        link: item.link || ''
      })) || [];

      res.json(posts);
    } catch (error) {
      console.error('RSS feed error:', error);
      res.status(500).json({ error: 'Failed to fetch RSS feed' });
    }
  });

  // RSS feed for Playbook page (Substack)
  app.get("/api/playbook-feed", async (req, res) => {
    try {
      const parser = new Parser();
      const feed = await parser.parseURL('https://feeds.simplecast.com/54nAGcIl');
      
      const posts = feed.items?.slice(0, 6).map(item => ({
        title: item.title || '',
        contentSnippet: item.contentSnippet || item.content?.substring(0, 200) + '...' || '',
        pubDate: item.pubDate || '',
        link: item.link || ''
      })) || [];

      res.json(posts);
    } catch (error) {
      console.error('Playbook RSS feed error:', error);
      res.status(500).json({ error: 'Failed to fetch playbook RSS feed' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
