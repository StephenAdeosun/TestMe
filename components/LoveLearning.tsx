import Image from "next/image";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Divider } from '@chakra-ui/react'

import Styles from "../app/page.module.css";

function LoveLearning() {
  return (
    <Box>
        <Divider mt={['40px','60px','133px']} />
      <Box as="section" 
      mt={['40px','60px','156px']}
       display={'flex'} alignItems={'center'} justifyContent={'space-between'} 
      flexDirection={['column', 'column', 'row']}
      className={Styles.body}>
        <Text
          as="h1"
          lineHeight={["40px", "95px"]}
          className={Styles.body}
          fontSize={["32px", "62px"]}
          fontWeight={700}
          maxW='828px'
          textAlign={['center', 'center', 'left']}
        >
          Why you`ll love learning with Verbalizelt
        </Text>

        <Text fontWeight={400} maxW={'423px'}
        fontSize={["16px", "22px"]}
        textAlign={['center', 'center', 'left']}

        >
        Reach your goals your whay with features designed for the fastets, most fun way to learn a language.
        </Text>
      </Box>

      <Box
          display="flex"
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
          m={'auto'}
          mt={'98px'}
        //   justifyContent="space-between"
          gap="100px"
        >
        
          <Image src="/personalized.png" alt="Hero Image" width={500} height={874} 
          style={{margin: 'auto'}}
          />
          <Image src="/progress.png" alt="Hero Image" width={500} height={874} 
          style={{margin: 'auto'}} 
           />
        </Box>
    </Box>
  );
}

export default LoveLearning;
