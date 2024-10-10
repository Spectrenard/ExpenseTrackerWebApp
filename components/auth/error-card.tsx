import { Header } from "./header";
import { BackButton } from "./back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oups! Quelque chose à mal tourné!" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Retour à la connexion" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};
