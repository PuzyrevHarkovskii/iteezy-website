'use client'

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

interface Props {
  children: React.ReactNode
}

function PriceWrapper(props: Props) {
  const { children } = props

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  )
}

export default function PriceList() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Стоимость
        </Heading>
        
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
              ₽
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                4800
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /месяц
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                
              Абонемент рассчитан на посещение регулярных занятий в группе в зависимости от возраста ребёнка. У нас обучаются ребята от 5-17 лет. Предварительная запись обязательна
              </ListItem>
              
              
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
              Записаться
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Выгодно
              </Text>
            </Box>
            <Box py={4} px={12}>
              
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                ₽
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  8800
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /2 месяца
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                Абонемент рассчитан на посещение регулярных занятий в группе в зависимости от возраста ребёнка. У нас обучаются ребята от 5-16 лет. Предварительная запись обязательна
                  2 месяца
                </ListItem>
                
                
                
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Записаться
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
              ₽
              </Text>
              <Text fontSize="5xl" fontWeight="900">500
              </Text>
              <Text fontSize="3xl" color="gray.500"> /пробное
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              
              <ListItem>
                
              Если ребенку понравилось на пробном занятии и он будет дальше учиться, то данное занятие для вас БЕСПЛАТНО.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Записаться
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  )
}