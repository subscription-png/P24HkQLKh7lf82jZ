
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

export type TabKey = 'BUILD' | 'ATTRACT' | 'CONVERT' | 'SCALE';

export const TABS: {
  key: Tab