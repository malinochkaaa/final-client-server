import React, {useState, memo} from "react";
import { 
    CarouselGridWrapper,
    Carousel, 
    CarouselItem,
    stylingCallback, 
    stylingResetCallback, 
    Card, 
    CardBody, 
    CardContent, 
    Image, 
    Row,
    Container,
} from '@sberdevices/plasma-ui';
const defaultImage = "https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-p2gfbv7qayyokn2iuybz9hr1rkhapcogpd9eywlyeq.png";
export const CarouselContainer = (props) => {
    const [index, setIndex] = useState(1);
    const items = props.pictures == undefined ? [defaultImage, defaultImage] : props.pictures;
    let itemsComponents = items.map((item, i) => (
            <CarouselItem key={i}>
                <Card style={{ width: "14rem", height: "11rem", margin: "0.4rem",}}>
                    <CardBody>
                        <CardContent>
                            <div className="phone-img-t">
                                <Image title={`Item ${i}`} src={item} />
                            </div>
                        </CardContent>
                    </CardBody>
                </Card>
            </CarouselItem>
    ))
    return(
        <Container>
            <CarouselGridWrapper>
                <Carousel
                    as={Row}
                    axis="x"
                    index={index}
                    scrollSnapType="mandatory"
                    detectActive
                    detectThreshold={0.5}
                    stylingCallback={stylingCallback}
                    stylingResetCallback={stylingResetCallback}
                    onIndexChange={(i) => setIndex(i)}
                    paddingStart="50%"
                    paddingEnd="50%"
                >
                {itemsComponents}
                </Carousel>
            </CarouselGridWrapper>
        </Container>
    )
}

export default CarouselContainer;