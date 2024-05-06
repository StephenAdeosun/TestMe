// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import HeroSection from '@/components/HeroSection'
import LoveLearning from '@/components/LoveLearning'
import NewLanguage from '@/components/NewLanguage'
import DownloadApp from '@/components/DownloadApp'  
import Footer from '@/components/Footer'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import styles from "./page.module.css";

export default function Page() {
  return (
<Box as="section" className={styles.body}>
  <HeroSection />
  <LoveLearning />
  <NewLanguage />
  <DownloadApp />
  <Footer />
</Box>
  )
}