import React, {FC} from "react";
import {Step, Stepper, Typography} from "@material-tailwind/react";
import {BuildingLibraryIcon, CogIcon, UserIcon} from "@heroicons/react/24/outline";

interface StepperWithStepsProps {
    activeStep: number;

    setIsLastStep(value: boolean): void;

    setIsFirstStep(value: boolean): void;

    setActiveStep(value: number): void;
}

export const StepperWithSteps: FC<StepperWithStepsProps> = ({
                                                                activeStep,
                                                                setActiveStep,
                                                                setIsLastStep,
                                                                setIsFirstStep
                                                            }) => {
    return (
        <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
        >
            <Step onClick={() => setActiveStep(0)}>
                <UserIcon className="h-5 w-5"/>
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                        variant="h6"
                        color={activeStep === 0 ? "blue-gray" : "gray"}
                        className="hidden lg:block"
                    >
                        Step 1
                    </Typography>
                    <Typography
                        color={activeStep === 0 ? "blue-gray" : "gray"}
                        className="hidden lg:block lg:font-normal"
                    >
                        Enter Trip Details.
                    </Typography>
                </div>
            </Step>
            <Step onClick={() => setActiveStep(1)}>
                <CogIcon className="h-5 w-5"/>
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                        variant="h6"
                        color={activeStep === 1 ? "blue-gray" : "gray"}
                        className="hidden lg:block"
                    >
                        Step 2
                    </Typography>
                    <Typography
                        color={activeStep === 1 ? "blue-gray" : "gray"}
                        className="hidden lg:block lg:font-normal"
                    >
                        Create Your Itinerary.
                    </Typography>
                </div>
            </Step>
            <Step onClick={() => setActiveStep(2)}>
                <BuildingLibraryIcon className="h-5 w-5"/>
                <div className="absolute -bottom-[4.5rem] w-max text-center">
                    <Typography
                        variant="h6"
                        color={activeStep === 2 ? "blue-gray" : "gray"}
                        className="hidden lg:block"
                    >
                        Step 3
                    </Typography>
                    <Typography
                        color={activeStep === 2 ? "blue-gray" : "gray"}
                        className="hidden lg:block lg:font-normal"
                    >
                        Review and save Trip.
                    </Typography>
                </div>
            </Step>
        </Stepper>
    );
}
