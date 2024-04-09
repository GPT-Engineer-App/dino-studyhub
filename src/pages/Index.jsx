import React, { useState } from "react";
import { Box, Heading, Text, Image, Stack, Button, Grid, GridItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

const dinosaurs = [
  {
    name: "Tyrannosaurus Rex",
    image: "https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0eXJhbm5vc2F1cnVzJTIwcmV4fGVufDB8fHx8MTcxMjYyMjc0MHww&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Tyrannosaurus Rex was one of the largest meat-eating dinosaurs that ever lived. It had a huge head with massive jaws and sharp, serrated teeth.",
  },
  {
    name: "Stegosaurus",
    image: "https://images.unsplash.com/photo-1598888831349-466fe5d9dedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGVnb3NhdXJ1c3xlbnwwfHx8fDE3MTI2MjI3NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Stegosaurus was a large, plant-eating dinosaur with two rows of bony plates along its back and two pairs of spikes at the end of its tail.",
  },
  {
    name: "Triceratops",
    image: "https://images.unsplash.com/photo-1651980802497-2ad4b4adbb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmljZXJhdG9wc3xlbnwwfHx8fDE3MTI2MjI3NDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Triceratops was a large, plant-eating dinosaur with a huge skull, a parrot-like beak, and three horns on its face.",
  },
  {
    name: "Velociraptor",
    image: "https://images.unsplash.com/photo-1645387326191-3eff39b10ef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZWxvY2lyYXB0b3J8ZW58MHx8fHwxNzEyNjIyNzQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Velociraptor was a small, fast-running, bipedal dinosaur with a long tail, large eyes, and three curved claws on each forelimb.",
  },
];

const Index = () => {
  const [selectedDinosaur, setSelectedDinosaur] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Dinosaur Explorer
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {dinosaurs.map((dinosaur, index) => (
          <GridItem key={index}>
            <Box
              borderWidth={1}
              borderRadius="lg"
              overflow="hidden"
              cursor="pointer"
              onClick={() => {
                setSelectedDinosaur(dinosaur);
                onOpen();
              }}
            >
              <Image src={dinosaur.image} alt={dinosaur.name} />
              <Box p={4}>
                <Heading as="h2" size="xl">
                  {dinosaur.name}
                </Heading>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedDinosaur?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Image src={selectedDinosaur?.image} alt={selectedDinosaur?.name} />
              <Text>{selectedDinosaur?.description}</Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
