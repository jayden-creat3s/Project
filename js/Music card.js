import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ExternalLink } from 'lucide-react';

const MusicCard = ({ item, onPlay }) => (
  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/60 transition-all duration-300 group">
    <CardContent className="p-4">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img src={item.cover} alt={item.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="icon" className="bg-green-500 hover:bg-green-600 rounded-full" onClick={() => onPlay(item)}>
            <Play className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">{item.type}</Badge>
          <span className="text-gray-400 text-sm">{item.year}</span>
        </div>
        <h3 className="font-semibold text-white text-lg leading-tight">{item.title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          {item.tracks && <span>{item.tracks} tracks</span>}
          <span>{item.streams} streams</span>
        </div>
        <div className="flex gap-2 pt-2">
          {Object.entries(item.platforms).map(([platform, url]) => (
            <Button key={platform} size="sm" variant="outline" className="text-xs capitalize border-gray-600 text-gray-300 hover:bg-gray-700" onClick={() => window.open(url, '_blank')}>
              <ExternalLink className="h-3 w-3 mr-1" />
              {platform}
            </Button>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default MusicCard;
