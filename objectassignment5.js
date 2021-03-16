/*Create 3 realistic objects with at least 10 key-value pairs
One of the 3 objects should contain a key with another object value which in turn has 5 key-value pairs
Create 3 realistic arrays with at least 3 other realistic arrays as elements
Create an array with two realistic objects as its elements */


const samsungPhone = {
    modelName : 'A10s',
    colour : 'Red',
    shape : 'Curved Edge',
    batteryType : 'Lithium ion',
    cameraType : 'Quadpro 4',
    price : '350USD',
    memory : 'Micro SD 16gb',
    operatingSystem : 'Android Version 3.4',
    weight : '208g',
    networkTechnology : 'GSM / CDMA / HSPA / EVDO / LTE / 5G'
  }
  
  console.log(samsungPhone);
  console.log(samsungPhone.modelName);
  
  const sneakers = {
    name : 'Prada Toblach',
    manufacturer : 'Nordstorm',
    size : 42,
    countryOfOrigin : 'Italy',
    location : 'Armoury Road, Port-Harcourt',
    material : 'Leather and textile upper and lining/rubber sole',
    price : '1100USD',
    weight : '0.6kg',
    colour : 'Black',
    productCode : '4E3536_3KFP_F0002'
  
  }
  
  console.log(sneakers);
  console.log(sneakers.name);
  
  const shirts = {
    name : 'Nautica Poplin',
    itemCode : 'NA613MW1B96CWNAFAMZ',
    price : '21000Naira',
    colour : 'Plaid Multicolur',
    materialType : 'Cotton',
    wristWatches : {
        brandName : 'Fossil',
        price : '127USD',
        colour : 'Black Stainless Steel',
        material : 'Metal',
        weight : '0.5kg',
    }
  };
  
  console.log(shirts);
  console.log(shirts.wristWatches.weight);
  console.log(shirts.wristWatches);
  console.log(shirts.itemCode);
  
  //Creating 3 realistic arrays with at least 3 other realistic arrays as elements
  
  const partyFoodLists = [['Pounded Yam', 'Fried Rice & Chicken', 'Spaghetti', 'Plantain Sauce'],['Chardonnay', 'Pinot Grigio', 'Cabernet Sauvignon'], ['shawarma', 'Kebabs', 'chicken', 'fish steaks']]
  
  console.log(partyFoodLists);
  
  console.log(partyFoodLists[0] [1], partyFoodLists[1] [0], partyFoodLists[2][3]); //To display Fried Rice & Chicken,Chardonnay & fish steaks
  
  console.log(partyFoodLists[1][2]); //To display Cabernet
  console.log(partyFoodLists[0][2]); //To display Spaghetti
  console.log(partyFoodLists[0][3], partyFoodLists[1][3]); // To display Plantain Sauce and Sauvignon
  console.log(partyFoodLists[0][0]); // To display Pounded Yam
  
  // Creating an array with two realistic objects as its elements
  
  const itemLists = [
    {color : 'Green', size : '50kg', name : 'Ford'},
    {color : 'Brown', size : '100kg', name : 'Aston Martin'}
    ]
  
    console.log(itemLists);
    console.log(itemLists[1]);
    console.log(itemLists[0]);