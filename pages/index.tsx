import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Dropdown } from "flowbite-react";
import CardLogin from "../components/CardLogin";
import tw from "twin.macro";
const Container = styled.div(tw`absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center mx-2`);

const Home: NextPage = () => {
    return (
        <Container>
            <CardLogin />
        </Container>
    );
};

export default Home;
