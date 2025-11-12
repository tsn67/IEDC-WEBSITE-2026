import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "../components/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/collapsible";
import { cn } from "../libs/utils";
import useActivityData from "../hooks/useActivityData";

interface ActivityPresenterProps {
    className?: string;
}

const ActivityPresenter = ({ className }: ActivityPresenterProps) => {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (id: string) => {
        setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const { activities } = useActivityData();

    return (
        <div className={cn("w-full space-y-6", className)}>
            <h1 className="md:self-start font-bold text-4xl xl:mt-0 mb-4 lg:mt-[100px] pt-4 self-center">
                Activities
            </h1>
            {activities.map((activity) => (
                <Card
                    key={activity.id}
                    className="overflow-hidden border-border/50 bg-white/80 shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-medium)]"
                >
                    <CardContent className="p-0">
                        <div className="grid gap-6 md:grid-cols-2 p-6">
                            {/* Text Content */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        {activity.mainTitle}
                                    </h3>
                                    <p className="text-xl font-medium text-muted-foreground">
                                        {activity.subTitle}
                                    </p>
                                </div>

                                {/* Desktop: Always visible explanation */}
                                <div className="hidden md:block">
                                    <p className="text-foreground/80 text-lg leading-relaxed">
                                        {activity.explanation}
                                    </p>
                                </div>

                                {/* Mobile: Collapsible explanation */}
                                <div className="md:hidden">
                                    <Collapsible
                                        open={openItems[activity.id]}
                                        onOpenChange={() => toggleItem(activity.id)}
                                    >
                                        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                            <span>
                                                {openItems[activity.id] ? "Hide" : "Show"} details
                                            </span>
                                            <ChevronDown
                                                className={cn(
                                                    "h-4 w-4 transition-transform duration-300",
                                                    openItems[activity.id] && "rotate-180"
                                                )}
                                            />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="pt-2">
                                            <p className="text-foreground/80 leading-relaxed">
                                                {activity.explanation}
                                            </p>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </div>
                            </div>

                            {/* Images Grid */}
                            <div
                                className={cn(
                                    "grid gap-4",
                                    activity.images.length === 1 && "grid-cols-1",
                                    activity.images.length === 2 && "grid-cols-2",
                                    activity.images.length === 3 && "grid-cols-2"
                                )}
                            >
                                {activity.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "relative overflow-hidden rounded-lg bg-muted",
                                            activity.images.length === 3 && index === 0 && "col-span-2"
                                        )}
                                    >
                                        <img
                                            src={image}
                                            alt={`${activity.mainTitle} - Image ${index + 1}`}
                                            className="w-full h-full object-cover aspect-video transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ActivityPresenter;
