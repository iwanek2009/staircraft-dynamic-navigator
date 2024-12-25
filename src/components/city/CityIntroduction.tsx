import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CityIntroductionProps {
  city: string;
  introduction: string;
}

export const CityIntroduction = ({ city, introduction }: CityIntroductionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bespoke Stair Manufacturing in {city}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{introduction}</p>
      </CardContent>
    </Card>
  );
};