import { useState, useEffect, useContext } from 'react'
import '../AddSpending/addSpending.scss';
import plus from '../../assets/images/plus.svg'
import { CurrencyContext } from '../CurrencyContext';
import { SpendingContext } from '../CurrencyContext';


const AddSpending = () => {

    interface SpendingType {
        description: string;
        amount: null | number;
        category: string;
        date: string;
    }

    const { currency } = useContext(CurrencyContext);

    const { spendings, setSpendings } = useContext(SpendingContext);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(null);
    const [category, setCategory] = useState('Food');
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState<string>(today);

    const [enterMoneyModal, setEnterMoneyModal] = useState(false);


    const handleAddSpending = () => {

        if (amount !== null && amount !== '' && amount > 0) {
            const newSpending: SpendingType = {
                description,
                amount,
                category,
                date,
            };

            const updatedSpendings = [...spendings, newSpending];
            setSpendings(updatedSpendings);

            localStorage.setItem('spendings', JSON.stringify(updatedSpendings));

            setDescription('');
            setAmount('' as unknown as null);
            setCategory('Food');
            setDate(today);

        } else {
            setEnterMoneyModal(true)
        }
    };

    const closeMoneyModal = () => setEnterMoneyModal(false)

    useEffect(() => {
        console.log('Spendings updated:', spendings);
    }, [spendings]);



    return (
        <div className="addSpending">
            <div className="container">
                <div className="addSpending-content">
                    <h2>Add new spending</h2>
                    <div className="category">
                        <div className="blank">
                            <h3>Description</h3>
                            <input type="text" placeholder='For example: dinner' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="blank">
                            <h3>Amount of money</h3>
                            <input type="number" placeholder={`0.00 ${currency}`} value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                        </div>
                        <div className="blank picker">
                            <h3>Category</h3>
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Food">Food</option>
                                <option value="Education">Education</option>
                                <option value="Transport">Transport</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Health">Health</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="blank date">
                            <h3>Date</h3>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                    <button className='add' onClick={handleAddSpending}><img src={plus} alt="" />Add</button>

                </div>
                {
                    enterMoneyModal && (
                        <div className="enterMoneyModal">
                            <div className="enterMoneyModal-content">
                                <h1>Please, change the amount of money</h1>
                                <button onClick={closeMoneyModal}>Ok</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AddSpending