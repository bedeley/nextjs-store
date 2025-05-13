import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comments from "./Comments";
import Image from "next/image";

type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: React.ReactNode;
};

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={reviewInfo.image}
            alt={reviewInfo.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1">
              <Rating rating={reviewInfo.rating} />
            </h3>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comments comment={reviewInfo.comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
};
export default ReviewCard;
