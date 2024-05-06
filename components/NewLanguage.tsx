import Image from "next/image";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Divider,Flex } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

import Styles from "../app/page.module.css";

function NewLearning() {
  return (
    <Box mx='40px'>
      <Box>
        <Box as="section" mt={"150px"} className={Styles.body}>
          <Text
            as="h1"
            lineHeight={["40px", "95px"]}
            className={Styles.body}
            fontSize={[42, 62]}
            textAlign={"center"}
            fontWeight={700}
            maxW="1181px"
          >
            Learn a new language the fun way
          </Text>

          <Text
            fontSize={["16px", "22px"]}
            textAlign={"center"}
            m={"auto"}
            mt={['20px','40px']}
            fontWeight={400}
            maxW={"667px"}
          >
            Reach your language goals fast with the world`s #1 education app{" "}
          </Text>
        </Box>

        <Box
        mt={['40px','60px','100px']}
        >
          <Image
            src="/world.svg"
            alt="Hero Image"
            width={1160}
            height={874}
            style={{ margin: "auto" }}
          />
        </Box>

        <Flex m={'auto'} flexDirection={['column','column','row']}
        gap={['40px','40px','0px']}
         >
          <Box m={'auto'}>
            <Text
              as="h1"
              className={Styles.body}
              fontSize={[42, 62]}
              fontWeight={700}
              textAlign={"center"}

            >
              4.5k+
            </Text>
            <Text
                            fontSize={[18,22]}

              as="span"
              className={Styles.body}
           
              textAlign={"center"}
              fontWeight={400}
            >
              Daily register from new users
            </Text>
          </Box>
          <Box m={'auto'}>
            <Text
              as="h1"
              className={Styles.body}
              fontSize={[42, 62]}
              fontWeight={700}
              textAlign={"center"}
            >
              1.5k+
            </Text>
            <Text
              fontSize={[18,22]}
              as="span"
              className={Styles.body}
           
              textAlign={"center"}
              fontWeight={400}
            >
              Language In the world
            </Text>
          </Box>
          <Box m={'auto'}>
            <Text
              as="h1"
              className={Styles.body}
              fontSize={[42, 62]}
              
              fontWeight={700}
              textAlign={"center"}
            >
              1000+
            </Text>
            <Text
                           fontSize={[18, 22]}

              as="span"
              className={Styles.body}
           
              textAlign={"center"}
              fontWeight={400}
            >
              Total learners in the world
            </Text>
          </Box>
       
        </Flex>
      </Box>
    </Box>
  );
}

export default NewLearning;
