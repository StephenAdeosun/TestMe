import Image from "next/image";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import Styles from "../app/page.module.css";

function HeroSection() {
  return (
    <Box  mx={['16px','24px','32px','40px']}>
      <Box
        as="section"
        className={Styles.body}
        display={{ base: "block", md: "flex" }}
        alignItems="center"
        justifyContent="space-between"
        gap={{ base: "40px", md: "0" }}
        // bg="gray.100"
        // py="12"
        // px={{ base: "4", md: "8" }}
      >
        <Box maxW={728} display="flex" flexDirection="column" gap={['20px','40px']}>
          <Text
            as="h1"
            lineHeight={["40px", "95px"]}
            className={Styles.body}
            fontSize={[32, 62]}
            fontWeight={700}
          >
            We make you learn language easily!
          </Text>

          <Text fontSize={["16px", "22px"]}
           fontWeight={400} maxW={649}>
            We help you learn language easily, with small lessons , you`ll earn
            points and unlock new levels while improving you rel world
            communications.
          </Text>
          <FormControl display="flex" gap={"16px"} flexDirection={{}}>
            <Input
              type="email"
              maxW={"412px"}
              borderRadius={40}
              height="52px"
              bgColor="#F5F5F5"
              placeholder="Enter your email"
              outline="none"
              _focus={{
                borderColor: "none",
              }}
            />
            {/* button */}
            <Button
              color="black"
              bgColor={"#FFCE31"}
              maxW={"216px"}
              height="52px"
              borderRadius={40}
              px={8}
              fontSize={[14,14,16, 20]}
              // colorScheme="teal"
              type="submit"
              _hover={{
                bgColor: "#FFCE31",
                color: "black",
                border: "none",
              }}
            >
              Get Started
            </Button>
          </FormControl>
        </Box>

        <Box
        m={['56px', '56px', '0']}
        mx='auto'>
          <Image src="/mobile.png" alt="Hero Image" width={815} height={613} />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={["column","column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        mt={"160px"}
        gap={['40px', '40px', 0]}
      >
        <Box>
          <Image src="/pic.png" alt="Hero Image" width={259} height={60} />
        </Box>

        <Box
          display="flex"
          flexDirection={["column","column", "row"]}

          alignItems="center"
          justifyContent="space-between"
          gap="40px"
        >
          <Image src="/visa.svg" alt="Hero Image" width={100} height={60} />
          <Image src="/spotify.svg" alt="Hero Image" width={100} height={60} />
          <Image src="/linked.svg" alt="Hero Image" width={100} height={60} />
          <Image src="/zoom.svg" alt="Hero Image" width={100} height={60} />
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
