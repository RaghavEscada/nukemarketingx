"use client";
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import Image from 'next/image';

// Define the game type
interface Game {
  id: number;
  name: string;
  scene: string;
  image: string;
}

// Game data
const games: Game[] = [
    { 
        id: 1, 
        name: "Game 1", 
        scene: "https://prod.spline.design/s5VgRsBwm7mq-Wqm/scene.splinecode",
        image: "/nuke.png",
    },
    { 
        id: 2, 
        name: "Game 2", 
        scene: "https://prod.spline.design/G46bcMRddu7fV2GY/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 3, 
        name: "Game 3", 
        scene: "https://prod.spline.design/kq0Sk-NbtEC7Gdkc/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 4, 
        name: "Game 4", 
        scene: "https://prod.spline.design/yxjkoyT5oby9JLPy/scene.splinecode",
        image: "/nuke.png"
    },
];

// Home page component
export default function Home() {
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    
    // If a game is selected, render the game view
    if (selectedGame) {
        return <GameView game={selectedGame} onBack={() => setSelectedGame(null)} />;
    }
    
    // Otherwise render the game selection screen
    return (
        <main className="w-screen h-screen bg-black overflow-auto">
            {/* Simple grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Header */}
            <div className="py-6 text-center">
                <h1 className="text-white text-3xl font-bold">SELECT GAME</h1>
            </div>
            
            {/* Game Grid */}
            <div className="max-w-4xl mx-auto p-4 grid grid-cols-2 gap-6">
                {games.map((game) => (
                    <button 
                        key={game.id}
                        onClick={() => setSelectedGame(game)}
                        className="block relative overflow-hidden bg-white/5 
                                 transition-all duration-200 hover:bg-white/10
                                 border border-white/10 rounded-lg aspect-square
                                 text-left cursor-pointer"
                    >
                        <Image
                            src={game.image}
                            alt={game.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                            quality={80}
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                        <div className="absolute bottom-0 left-0 p-4">
                            <h2 className="text-xl font-bold text-white">{game.name}</h2>
                        </div>
                    </button>
                ))}
            </div>
        </main>
    );
}

// Game view component
interface GameViewProps {
    game: Game;
    onBack: () => void;
}

function GameView({ game, onBack }: GameViewProps) {
    const [isLoading, setIsLoading] = useState(true);
    
    return (
        <main className="w-screen h-screen relative bg-black">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
                    <div className="text-center">
                        <div className="text-white text-xl mb-4">LOADING...</div>
                        <div className="text-white/40 text-sm space-y-1">
                            <p>CLICK + DRAG - ROTATE</p>
                            <p>WASD - MOVE</p>
                            <p>↑↓ - CAMERA</p>
                        </div>
                    </div>
                </div>
            )}
            
            <Spline
                scene={game.scene}
                onLoad={() => setIsLoading(false)}
            />
            
            {/* Back button */}
            <button 
                onClick={onBack}
                className="absolute top-4 left-4 z-50 px-4 py-2 rounded
                         text-white bg-black/40 backdrop-blur-sm
                         border border-white/20 hover:bg-black/60"
            >
                ← BACK
            </button>
        </main>
    );
}