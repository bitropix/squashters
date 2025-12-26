'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster="/squash-player-action-shot-dark-dramatic-lighting.jpg"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
          />
        </video>
        <div className="bg-background/70 absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center lg:px-8">
        <p className="text-primary mb-4 text-sm font-medium tracking-widest uppercase">
          Excellence in Squash Since 2004
        </p>
        <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Transform Your Game with
          <span className="text-primary mt-2 block">World-Class Coaching</span>
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
          Join Delhi NCR&apos;s premier squash academy. Over 20 years of experience training national champions, from
          beginners to elite athletes.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg" className="px-8 text-base">
              Contact Us
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="bg-transparent px-8 text-base">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={item.name}
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 left-8 z-10 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="bg-background/50 text-foreground hover:bg-background/70 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <button
          onClick={toggleMute}
          className="bg-background/50 text-foreground hover:bg-background/70 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-colors"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          <div className="bg-muted-foreground/30 relative h-12 w-px overflow-hidden">
            <div className="bg-primary h-4 w-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
