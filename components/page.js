
import {Container, Homelink} from "@components/atoms";

export default function Page({ children }) {
  return (
    <Container size="max-w-2xl">
      <div className="py-4 pt-8 sm:pt-16 md:mb-8 ">
        <Homelink/>
      </div>
      {children}
    </Container>
  );
}
