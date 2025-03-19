import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button, Text } from "@rewind-ui/core";
import { useNavigate } from "react-router";

export function EmptyPage() {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
      <DotLottieReact className='h-[400px]' src={`${process.env.PUBLIC_URL}/anims/NotFound.lottie`} loop autoplay />
      <Text size='4xl'>The requested resource was not found.</Text>
      <Button color='blue' shadow='md' shadowColor='blue' withRing={false} onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
}
