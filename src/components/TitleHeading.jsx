import React from 'react'
import CardHeader from '@material-tailwind/react/CardHeader';
import Button from '@material-tailwind/react/Button';

const TitleHeading = ({heading, subheading}) => {
  return (
    <>
        <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">{heading}</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                       {subheading}
                    </Button>
                </div>
            </CardHeader>
    </>
  )
}

export default TitleHeading