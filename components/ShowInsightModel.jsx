import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CreateTransaction from "./CreateTransaction";

export default function AddTransactionModal({ open, onOpenChange, totalExpenses, topCategory, recentTx, transaction }) {
    // creating a object to hold total expenses, top category and recent transaction
    const data = {
        totalExpenses: totalExpenses || 0,
        topCategory: topCategory || null,
        recentTx: recentTx || null,
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Insight from you transaction data</DialogTitle>
                    <DialogDescription>
                        Here are some insights based on your recent transactions. You can scroll through the carousel to see more.
                        <br />

                    </DialogDescription>
                </DialogHeader>
                <Carousel className="w-fit max-w-xs mx-auto">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div>
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <div className="text-center">
                                                <h2 className="text-lg font-semibold">Insight {index + 1}</h2>
                                                <p className="text-sm text-gray-500 mt-2">
                                                    {index === 0 ? `Total Expenses: ₹${data.totalExpenses}` :
                                                        index === 1 ? `Top Category: ${data.topCategory ? data.topCategory.category : "N/A"} - ₹${data.topCategory ? data.topCategory.total : 0}` :
                                                            index === 2 ? `Recent Transaction: ${data.recentTx ? `${data.recentTx.description} – ₹${data.recentTx.amount}` : "N/A"}` :
                                                                "More insights coming soon!"}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </DialogContent>
        </Dialog>
    );
}
