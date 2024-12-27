"use client";
import Button from './ui/dualBut';
import React from 'react';
import TypingAnimation from "../components/ui/typing-animation";
const Introduction: React.FC = React.memo(() => {
  return (
    <div className="pb-20  dark:bg-background bg-cover bg-center bg-white dark:bg-black text-black dark:text-white">
      <main className="p-20">
        <div className="p-5 rounded-lg text-center">
          <h1 className="dark:text-yellow-400 text-black py-20 pb-0 text-5xl font-bold font-newLuck">
            <TypingAnimation>Welcome to Our Site</TypingAnimation>
          </h1>
          <h2 className="dark:text-green-100 text-blue-600 py-6 pb-0 text-4xl font-newLuck font-bold mb-2">
            <span>Explore Our Features</span>
          </h2>
          <Button />
        </div>
      </main>
    </div>
  );
});

Introduction.displayName = 'Introduction';

export default Introduction;