import { useState } from "react";
import {
  Flex,
  Link,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Styles from "../app/page.module.css";


const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white" // Set background to white
      color="black" // Set text color to black
    >
      {/* Logo */}
      <Flex align="center">
        <NextLink href="/">
          <Link fontSize={"26px"} fontWeight={700}>
            <strong>VerbalizeIt</strong>
          </Link>
        </NextLink>
      </Flex>

      {/* Hamburger/Close Icon */}
      <IconButton
        aria-label="Toggle Navigation"
        display={{ base: "flex", md: "none" }}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={onToggle}
        color="black" // Set icon color to black
      />

      {/* Drawer */}
      <Drawer placement="right" onClose={onToggle} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent className={Styles.body}>
          <DrawerCloseButton />
          <DrawerHeader>VerbalizeIt</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" gap={'18px'}>
              <NextLink href="/services">
                <Link py={2} _hover={{ color: "yellow.500" }}>
                  Services
                </Link>
              </NextLink>
              <NextLink href="/blog">
                <Link py={2} _hover={{ color: "yellow.500" }}>
                  Blog
                </Link>
              </NextLink>
              <NextLink href="/about">
                <Link py={2} _hover={{ color: "yellow.500" }}>
                  About
                </Link>
              </NextLink>
              <NextLink href="/contact">
                <Link py={2} _hover={{ color: "yellow.500" }}>
                  Contact
                </Link>
              </NextLink>
            </Flex>
            {/* Register Button (Small Screens) */}
            {!isLargerThanMD && (
                 <Button
                 color="black"
                 bgColor={"#FFCE31"}
                //  maxW={"216px"}
                 height="52px"
                 w={'full'}
                 mt={4}
                 borderRadius={10}
                 p={4}
                //  fontSize={[12,14,16, 20]}
                 // colorScheme="teal"
                 type="submit"
                 _hover={{
                   bgColor: "#FFCE31",
                   color: "black",
                   border: "none",
                 }}
               >
                 Register
               </Button>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Navigation Links (Medium and Large Screens) */}
      {isLargerThanMD && (
        <Flex
          align="center"
          justify="center"
          direction="row"
          flexGrow={1}
          display={{ base: "none", md: "flex" }}
          bg="white" // Set background to white
          p={0} // Remove padding
          borderRadius="md" // Add border radius
          mt={0} // Remove margin top
          position="static" // Set position to static for large screens
          zIndex={0} // Set z-index to ensure it appears behind the Drawer
        >
          <NextLink href="/services">
            <Link
              mr={4}
              px={2}
              fontSize={"16px"}
              fontWeight={400}
              _hover={{ color: "yellow.500" }}
            >
              Services
            </Link>
          </NextLink>
          <NextLink href="/blog">
            <Link
              mr={4}
              px={2}
              fontSize={"16px"}
              fontWeight={400}
              _hover={{ color: "yellow.500" }}
            >
              Blog
            </Link>
          </NextLink>
          <NextLink href="/about">
            <Link
              mr={4}
              px={2}
              fontSize={"16px"}
              fontWeight={400}
              _hover={{ color: "yellow.500" }}
            >
              About
            </Link>
          </NextLink>
          <NextLink href="/contact">
            <Link
              px={2}
              fontSize={"16px"}
              fontWeight={400}
              _hover={{ color: "yellow.500" }}
            >
              Contact
            </Link>
          </NextLink>
        </Flex>
      )}

      {/* Register Button (Medium and Large Screens) */}
      {isLargerThanMD && (
            <Button
            display={'inline-flex'}
            color="black"
            bgColor={"#FFCE31"}
            maxW={"181px"}
            height="52px"
            borderRadius={40}
            px={8}
            fontSize={[12,14,16, 18]}
            // colorScheme="teal"
            type="submit"
            _hover={{
              bgColor: "#FFCE31",
              color: "black",
              border: "none",
            }}
          >
            Register
          </Button>
      )}
    </Flex>
  );
};

export default Navbar;
