import Image from "next/image";
import { Box, Divider, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
} from "@chakra-ui/react";

import Styles from "../app/page.module.css";

function Footer() {
  return (
    <Box mt={['80px', '100px', '140px']} mx={['16px','24px','32px','40px']}>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={['column', 'column', 'row']}        
        >
          <Box>
            <Text
              as="h1"
              className={Styles.body}
              fontSize="36px"
              fontWeight={700}
              maxW="190px"
            >
              Verbalizelt
            </Text>
            <Text
              as="p"
              mt={"26px"}
              className={Styles.body}
              fontSize="22px"
              fontWeight={400}
              maxW="375px"
            >
              Learning is a global training provider based across the UK that
              specialises in accrodited and bespoke training course.
            </Text>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"40px"}
          flexDirection={['column', 'row', 'row']}        

          >
            <VStack spacing={"30px"}>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                About Us
              </Link>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                Service
              </Link>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                Blog
              </Link>
            </VStack>
            <VStack spacing={"30px"}>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                Terms & conditions
              </Link>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                Become a Partner
              </Link>
            </VStack>
            <VStack spacing={"30px"}>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                Twitter
              </Link>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                Facebook
              </Link>
              <Link
                href="/about"
                fontSize={"22px"}
                fontWeight={400}
                _hover={{ color: "yellow.500" }}
              >
                Instagram
              </Link>
            </VStack>
          </Box>
        </Box>

        <Divider mt={"40px"} bgColor={'#000000'} />
        <Divider bgColor={'#000000'} />
       
        

        <Text textAlign={'center'}  as="p"
          className={Styles.body}
          fontSize="18px"
          fontWeight={400}
          mt={'36px'}
          pb={'40px'}
        //   maxW='828px'
          >
        Privacy Policy | Terms & Conditions | Cookies Policy 
        </Text>

      </Box>
    </Box>
  );
}

export default Footer;
