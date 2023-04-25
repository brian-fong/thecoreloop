// Components
import { 
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import Logo from "../components/Core/Logo";
import CurveContainer from "../components/Core/CurveContainer";
import CurveSubContainer from "../components/Core/CurveSubContainer";
import SubmitBtn from "../components/Core/SubmitBtn";

// Hooks
import { useFormik } from "formik";
import React, { useState } from "react";

// Helpers 
import { pressBtn } from "../utils/animations";

function validate(values: any) {
  const errors: any = {};

  // Check username field
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Cannot be more than 15 characters"
  }

  // Check email-address field
  if (!values.email) {
    errors.email = "Required";
  }

  // Check bio field
  if (!values.bio) {
    errors.bio = "Required";
  }

  // Check favorite-game field
  // if (!values.favorite_game) {
  //   errors.favorite_game = "Required";
  // }
  if (values.favorite_game.length > 60) {
    errors.favorite_game = "Cannot be more than 60 characters";
  }

  // Check class field 
  if (!values.class) {
    errors.class = "Required";
  }

  return errors;
}

export default function formik() {
  const [submittedOnce, setSubmittedOnce] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      bio: "",
      favorite_game: "",
      class: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log("Submitted");
      const submit_btn: HTMLElement = document.getElementById("submit-btn")!;
      await pressBtn(submit_btn);
      setSubmittedOnce(true);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Head>
        <title>tcl - formik</title>
        <link rel="icon" type="image/x-icon" href="/thecoreloop-favicon.png" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Container */}
      <Flex
        id="main-container"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        minHeight="100vh"
        padding="2rem"
        background="body"
      >
        <Flex
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          gap="3rem"
          width="100%"
          minWidth="500px"
          maxWidth="800px"
          height="100%"
        >
          <Logo />

          <CurveContainer heading="Formik">
            <form 
              id="user-form"
              onSubmit={formik.handleSubmit} 
              style={{ width: "100%" }}
            >
              <Flex 
                id="form-outer-container"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                marginBottom="2rem"
                width="100%" 
              >
                <Flex
                id="form-inner-container"
                  flexDirection="column"
                  justifyContent="start"
                  alignItems="center"
                  gap="1rem"
                  width="100%"
                >
                  <Flex
                    id="username-field-container"
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    width="100%"
                  >
                    <FormLabel 
                      htmlFor="username"
                      margin="0"
                      padding="0.5rem 1rem"
                      height="42px"
                      color="white"
                      background="#114dcf"
                      border="1px solid black"
                      borderRight="none"
                      fontWeight="800"
                    >
                      Username
                    </FormLabel>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      padding="0.5rem"
                      width="100%"
                      height="42px"
                      textAlign="start"
                      background="white"
                      border="1px solid black"
                      borderRadius="0px"
                      overflow="hidden"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                      placeholder="0xkingslayer"
                      _hover={{}}
                      _focusVisible={{}}
                      isInvalid={
                        formik.touched.username
                          && formik.errors.username ? true : false
                      }
                    />
                  </Flex>

                  <Flex
                    id="email-field-container"
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    width="100%"
                  >
                    <FormLabel 
                      htmlFor="email"
                      margin="0"
                      padding="0.5rem 1rem"
                      height="42px"
                      color="white"
                      background="#114dcf"
                      border="1px solid black"
                      borderRight="none"
                      fontWeight="800"
                    >
                      Email
                    </FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      padding="0.5rem"
                      width="100%"
                      height="42px"
                      textAlign="start"
                      background="white"
                      border="1px solid black"
                      borderRadius="0px"
                      overflow="hidden"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      isInvalid={
                        formik.touched.email 
                          && formik.errors.email ? true : false
                      }
                      placeholder="tyrion@lannister.com"
                      _hover={{}}
                      _focusVisible={{}}
                    />
                  </Flex>

                  <Flex
                    id="bio-field-container"
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="start"
                    width="100%"
                  >
                    <FormLabel 
                      htmlFor="bio"
                      margin="0"
                      padding="0.2rem 0.5rem"
                      height="100%"
                      color="white"
                      fontWeight="800"
                      background="#114dcf"
                      border="1px solid black"
                      borderBottom="none"
                      boxShadow="3px 3px 2px rgba(0, 0, 0, 0.5)"
                    >
                      Bio
                    </FormLabel>
                    <Textarea
                      id="bio"
                      name="bio"
                      padding="0.5rem"
                      width="100%"
                      minHeight="80px"
                      textAlign="start"
                      background="white"
                      border="1px solid black"
                      borderRadius="0px"
                      overflow="hidden"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.bio}
                      isInvalid={
                        formik.touched.bio 
                          && formik.errors.bio ? true : false
                      }
                      placeholder="A Lannister always pays his debts."
                      _hover={{}}
                      _focusVisible={{}}
                    />
                  </Flex>

                  <Flex
                    id="favorite-game-field-container"
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    width="100%"
                  >
                    <FormLabel 
                      htmlFor="favorite_game"
                      margin="0"
                      padding="0.5rem 1rem"
                      height="42px"
                      color="white"
                      background="#114dcf"
                      border="1px solid black"
                      borderRight="none"
                      fontWeight="800"
                      whiteSpace="nowrap"
                    >
                      Favorite Game
                    </FormLabel>
                    <Input
                      id="favorite_game"
                      name="favorite_game"
                      type="text"
                      padding="0.5rem"
                      width="100%"
                      height="42px"
                      textAlign="start"
                      background="white"
                      border="1px solid black"
                      borderRadius="0px"
                      overflow="hidden"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.favorite_game}
                      placeholder="Maplestory"
                      _hover={{}}
                      _focusVisible={{}}
                    />
                  </Flex>

                  <Flex
                    id="class-field-container"
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    width="100%"
                  >
                    <FormLabel 
                      htmlFor="class"
                      margin="0"
                      padding="0.5rem 1rem"
                      height="42px"
                      color="white"
                      background="#114dcf"
                      border="1px solid black"
                      borderRight="none"
                      fontWeight="800"
                      whiteSpace="nowrap"
                    >
                      Select your class
                    </FormLabel>
                    <Select
                      id="class"
                      name="class"
                      width="100%"
                      height="42px"
                      background="white"
                      border="1px solid black"
                      borderLeft="none"
                      borderRadius="0"
                      placeholder=" "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.class}
                      isInvalid={
                        formik.touched.class
                          && formik.errors.class ? true : false
                      }
                      _hover={{}}
                      _focusVisible={{}}
                    >
                      <option value="Builder">
                        Builder
                      </option>
                      <option value="Content Creator">
                        Content Creator
                      </option>
                      <option value="Founder">
                        Founder
                      </option>
                      <option value="Gamer">
                        Gamer
                      </option>
                      <option value="Investor">
                        Investor
                      </option>
                    </Select>
                  </Flex>

                  <Flex
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                  >
                    <SubmitBtn />
                  </Flex>

                </Flex>
              </Flex>
            </form>

            <CurveSubContainer heading="Form Results"></CurveSubContainer>
          </CurveContainer>
        </Flex>
      </Flex>
    </>
  );
}
