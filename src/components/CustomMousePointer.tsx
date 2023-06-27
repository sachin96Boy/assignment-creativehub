import { Box, Flex, Image, Text } from "@chakra-ui/react";
import MousePointer from "../assets/custom-mouse.png";
import React, { useEffect } from "react";

function CustomMousePointer(props: any) {
  const [valx, setValx] = React.useState(0);
  const [valy, setValy] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [isloaded, setIsloaded] = React.useState(false);

  useEffect(() => {
    props.socket.on("sendDatatoClient", (dataFromServer: any) => {
      // console.log(dataFromServer);
      setValx(dataFromServer.position.x);
      setValy(dataFromServer.position.y);
      setTitle(dataFromServer.user.username);
      setIsloaded(true);
    });
  }, [props.socket]);

  return (
    <Box position={"relative"} top={valx} left={valy} display={!isloaded ? 'none': 'flex'}>
      <Box position={"absolute"}>
        <Flex
          color={"white"}
          align={"center"}
          justify={"space-between"}
          flexDir={"row"}
          m={2}
        >
          <Image src={MousePointer} alt="custom-mouse" />
          <Text fontWeight={"bold"}>{title}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default CustomMousePointer;
