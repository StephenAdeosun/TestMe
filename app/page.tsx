// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Divider from '@/components/Divider'
import LoveLearning from '@/components/LoveLearning'
import NewLanguage from '@/components/NewLanguage'
import DownloadApp from '@/components/DownloadApp'  
import Footer from '@/components/Footer'
import { Box, Button, Heading, Text,Divider } from '@chakra-ui/react'
import styles from "./page.module.css";

export default function Page() {
  return (
<Box as="section"  className={styles.body}>
  <Navbar />
  <Divider />
  <HeroSection />
  <LoveLearning />
  <NewLanguage />
  <DownloadApp />
  <Footer />
</Box>
  )
}