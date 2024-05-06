import Image from "next/image";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Divider } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

import Styles from "../app/page.module.css";

function DownloadApp() {
  return (
    <Box bgColor={'#FFCE31'}
     minH={['380px','680px']}
     mt={'100px'} alignItems={'center'} display={'flex'} justifyContent={'center'}>
      <Box>
        <Box as="section" mt={"150px"} className={Styles.body}>
          <Text
            as="h1"
            lineHeight={["40px", "95px"]}
            className={Styles.body}
            fontSize={[32, 62]}

            textAlign={"center"}
            fontWeight={700}
            maxW="1181px"
          >
            Learn a new language for free download app Now!
          </Text>

          <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
        //   m={'auto'}
          mt={'57px'}
          justifyContent="center"
          gap="22px"
        >
        
          <Image src="/app.png" alt="Hero Image" width={179} height={100} 
        //   style={{margin: 'auto'}}
          />
          <Image src="/google.png" alt="Hero Image" width={179} height={100} 
        //   style={{margin: 'auto'}} 
           />
        </Box>

         </Box>


      
      </Box>
    </Box>
  );
}

export default DownloadApp;
