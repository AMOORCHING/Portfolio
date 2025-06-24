"use client"

import { motion, Variants } from "framer-motion";
import React from 'react';

export default function Mahika20th() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-mahika-bg bg-cover bg-center min-h-screen flex items-center justify-center font-writer text-gray-800">
      <motion.div
        className="w-11/12 max-w-lg bg-white/60 p-6 backdrop-blur-lg sm:p-8"
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-4 text-xl text-green-800 sm:text-2xl font-writer-bold"
          variants={itemVariants}
        >
          for mahika
        </motion.h1>
        <motion.div
          className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-lg"
          variants={cardVariants}
        >
          <motion.p variants={itemVariants}>
            I wonder how many times a day<br />
            bees accidentally bump into each other mid-flight.<br />
            Do they apologize? Or just zip away,<br />
            pretending everything is simply alright?
          </motion.p>
          <motion.p variants={itemVariants}>
            I reminisce on Mahika&apos;s day,<br />
            when chaos buzzes in a festive way.<br />
            She&apos;d say &quot;sorry&quot; mid-flight, no doubt,<br />
            then spin around, with no more than a pout.
          </motion.p>
          <motion.p variants={itemVariants}>
            So here&apos;s to crashes, stings, and grace,<br />
            to birthday joy and honeyed space.<br />
            May your day be eclectic, full and bright—<br />
            like bees mid-bump, just out of sight.
          </motion.p>
        </motion.div>
        <motion.p
          className="mt-8 text-lg text-green-900 sm:text-xl font-writer-ultrabold"
          variants={itemVariants}
        >
          Happy 20th Birthday!
        </motion.p>
      </motion.div>
    </main>
  );
}
