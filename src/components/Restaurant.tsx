import React, { FormEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
`;

const FormContainer = styled.form`
    margin-top: 10%;
    width: 40%;
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    box-sizing: border-box;

    & > label {
        width: 15%;
    }

    & > input {
        width: 75%;
        border-radius: 4px;
        border-color: #3498DB;
        padding: 8px;
        border-width: 1px;
        outline-color: transparent;
        transition: all 0.15s ease-in-out;

        &:focus{
            outline-color: #2E86C1;
        }

        &:active{
            transform: scale(0.9);
        }
    }
`;

const SaveButton = styled.button`
    width: 100%;
    background-color: #2E86C1;
    cursor: pointer;
    padding: 10px 30px;
    color: white;
    border-radius: 10px;
    border: none;
    outline: none;
    transition: all 0.15s ease-in-out;
    font-size: 18px;

    &:hover{
        background-color: #3498DB;
    }

    &:active{
        transform: scale(0.9);
    }
`;

const ContainerDetail = styled.div`
    margin-top: 5%;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cecece;
    border-radius: 10px;
    padding: 20px;

    & > div{
        width: 60%;
    }

    & > button{
        width: 30%;
    }
`;

const DeleteButton = styled.button`
    width: 100%;
    background-color: #CB4335;
    cursor: pointer;
    padding: 10px;
    color: white;
    border-radius: 10px;
    border: none;
    outline: none;
    transition: all 0.15s ease-in-out;
    font-size: 16px;

    &:hover{
        background-color: #E74C3C;
    }

    &:active{
        transform: scale(0.9);
    }
`;

interface RestaurantProps {
    saveRestaurant: (restaurant: IRestaurant | any) => void;
    restaurant: IRestaurant;
    removeRestaurant: (restaurant: IRestaurant) => void;
}

const RestaurantPage: React.FC<RestaurantProps> = (props) => {

    const [restaurantState, setRestaurantState] = useState<IRestaurant | {}>();
    const { saveRestaurant, restaurant, removeRestaurant } = props;
    const dispatch: Dispatch<any> = useDispatch();

    const handleRestaurantData = (e: FormEvent<HTMLInputElement>) => {
        setRestaurantState({
            ...restaurantState,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    const addNewRestaurant = (e: FormEvent) => {
        e.preventDefault();
        saveRestaurant(restaurantState);
    };

    const deleteRestaurant = useCallback(
        (restaurant: IRestaurant) => {
            dispatch(removeRestaurant(restaurant));
        },
        [dispatch, removeRestaurant]
    );

    return(
        <Container>
            <FormContainer 
                onSubmit={addNewRestaurant}
            >
                <FormGroup>
                    <label htmlFor={"name"}>Name:</label>
                    <input 
                        type={"text"} 
                        placeholder={"Enter name"} 
                        onChange={handleRestaurantData}    
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor={"location"}>Location:</label>
                    <input 
                        type={"text"} 
                        placeholder={"Enter location"} 
                        onChange={handleRestaurantData}
                    />
                </FormGroup>
                <SaveButton 
                    type={"submit"}
                    disabled={restaurantState === undefined ? true : false}
                >
                    Save
                </SaveButton>
            </FormContainer>

            <ContainerDetail>
                <div style={{display: 'flex', alignItems: 'center', }}>
                    <p style={{marginRight: '10px'}}>Name: {restaurant.name}</p>
                    <p>Location: {restaurant.location}</p>
                </div>
                <DeleteButton 
                    type={'button'}
                    onClick={()=>deleteRestaurant(restaurant)}
                >
                    Delete
                </DeleteButton>
            </ContainerDetail>
        </Container>
    );
};

// const mapStateToProps = (state: RestaurantState) => {
//     return {
//         restaurantList: state,
//     };
// };

// const mapDispatchToProps = (dispatch: any) => {
//     return{
//         add: (res:any) => {
//             dispatch({type: "ADD", payload: res});
//             console.log(res);
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
export default RestaurantPage;