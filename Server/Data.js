
const Data = [
    {
        "id": 1,
        "name": "iphone x",
        "company": "Apple",
        "price": 6000000,
        "colors": [
            "#ff0000",
            "#000000",
            "#CDD0D0"
        ],
        "image": "https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Mobile",
        "stars": 3.5,
        "reviews": 98,
        "stock": 5
    },
    {
        "id": 2,
        "name": "samsung s20",
        "company": "Samsung",
        "price": 5000000,
        "colors": [
            "#000",
            "#22D3EF"
        ],
        "image": "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Mobile",
        "shipping": true,
        "stars": 3,
        "reviews": 59,
        "stock": 7
    },
    {
        "id": 3,
        "name": "Dell Series",
        "company": "Dell",
        "price": 600000,
        "colors": [
            "#22D3EF",
            "#CDD0D0"
        ],
        "image": "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Laptop",
        "stars": 4.1,
        "reviews": 120,
        "stock": 4
    },
    {
        "id": 4,
        "name": "Nokia",
        "company": "Nokia",
        "price": 12599,
        "colors": [
            "#000",
            "#000000",
            "#CDD0D0"
        ],
        "image": "https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Mobile",
        "shipping": true,
        "stars": 3.8,
        "reviews": 40,
        "stock": 10
    },
    {
        "id": 5,
        "name": "Mac Pc",
        "company": "Apple",
        "price": 4000099,
        "colors": [
            "#000",
            "#CDD0D0"
        ],
        "image": "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Computer",
        "shipping": true,
        "stars": 4.5,
        "reviews": 153,
        "stock": 2
    },
    {
        "id": 6,
        "name": "Macbook Pro",
        "company": "Apple",
        "price": 42999,
        "colors": [
            "#000000",
            "#CDD0D0"
        ],
        "image": "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Laptop",
        "shipping": true,
        "stars": 3.1,
        "reviews": 63,
        "stock": 6
    },
    {
        "id": 7,
        "name": "Asus gseries",
        "company": "Asus",
        "price": 23999,
        "colors": [
            "#CDD0D0",
            "#000"
        ],
        "image": "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Laptop",
        "shipping": true,
        "stars": 2.8,
        "reviews": 77,
        "stock": 6
    },
    {
        "id": 8,
        "name": "Accessories",
        "price": 1099999,
        "company": "Lenovo",
        "colors": [
            "#000",
            "#CDD0D0"
        ],
        "image": "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Accessories",
        "shipping": true,
        "stars": 2.1,
        "reviews": 33,
        "stock": 10
    },
    {
        "id": 9,
        "name": "iWatch",
        "price": 39999,
        "company": "Apple",
        "colors": [
            "#000000"
        ],
        "image": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Watch",
        "shipping": true,
        "stars": 3.9,
        "reviews": 106,
        "stock": 7
    },
    {
        "id": 10,
        "name": "Boys need",
        "company": "Apple",
        "price": 300099,
        "colors": [
            "#ff0000",
            "#22D3EF",
            "#000000"
        ],
        "image": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Accessories",
        "stars": 4.2,
        "reviews": 91,
        "stock": 9
    },
    {
        "id": 11,
        "name": "rolex premium",
        "company": "Rolex",
        "price": 999999,
        "colors": [
            "#000000",
            "#CDD0D0"
        ],
        "image": "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Watch",
        "stars": 4.8,
        "reviews": 166,
        "stock": 4
    },
    {
        "id": 12,
        "name": "galaxy w20",
        "price": 311999,
        "company": "Samsung",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "Watch",
        "stars": 3.0,
        "reviews": 45,
        "stock": 5
    },
    {
        "id": 13,
        "name": "boAt Airdopes 141 Bluetooth",
        "price": 89900,
        "company": "BoAt",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/619gHpSiOXL._SY355_.jpg",
        "description": "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds. Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience.",
        "category": "Earphone",
        "stars": 3.8,
        "reviews": 123,
        "stock": 4
    },
    {
        "id": 15,
        "name": "boAt Stone 352 Bluetooth Speaker",
        "price": 129900,
        "company": "BoAt",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/41TAKjYMgxL._SX300_SY300_QL70_FMwebp_.jpg",
        "description": "Playback- Enjoy an extended break on weekends with your favourite episodes on stream, virtue of a playback time of up to 42 hours including the 6 hours nonstop playtime for earbuds. Low Latency- Our BEAST mode makes Airdopes 141 a partner in entertainment with real-time audio and low latency experience.",
        "category": "Speaker",
        "stars": 3.9,
        "reviews": 51,
        "stock": 3
    },
    {
        "id": 16,
        "name": "Samsung 138 cm (55 inches) Crystal 4K Neo Series Ultra HD Smart LED TV",
        "price": 4399000,
        "company": "Samsung",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/81wfmPBEOpL._SX355_.jpg",
        "description": "Smart TV Features : Supported apps: Netflix, Prime Video, YouTube, etc., Screen mirroring, Universal Guide, Media Home, Tap View, Mobile Camera Support, AI Speaker, Easy Setup, App Casting, Wireless DeX, SmartThings, Smart Hub, IoT Sensor, Web Browser",
        "category": "Led TV",
        "stars": 4.2,
        "reviews": 231,
        "stock": 6
    },
    {
        "id": 17,
        "name": "ASUS TUF Gaming F15 with 90WHr Battery Core i5 11th Gen 11400H",
        "price": 6099000,
        "company": "Asus",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/v/y/z/-original-imagtucnqsqpbvk6.jpeg?q=70",
        "description": "15.6 Inch Full HD, Refresh Rate 144Hz, Viewing Angle 85/85/85/85, Panel Tech Value IPS-level, Brightness 250, Contrast 1000:1, NTSC 45%, SRGB 62.5%, Adobe 47.34%, Anti-glare display Light Laptop without Optical Disk Drive",
        "category": "Laptop",
        "stars": 4.4,
        "reviews": 19,
        "stock": 4
    },
    {
        "id": 18,
        "name": "Whirlpool 7.5 Kg 5 Star Stainwash Pro Fully Automatic",
        "price": 1774000,
        "company": "Whirlpool",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/619ShOPFfJL._SY679_.jpg",
        "description": "Washing Machine Fully Automatic top load washing machine : Affordable with best wash quality and easy to use with In-Built Heater Washing Machine Fully Automatic Capacity 7.5 kg : Suitable for 3 – 4 members per wash",
        "category": "Washing",
        "stars": 4.4,
        "reviews": 231,
        "stock": 6
    },
    {
        "id": 19,
        "name": "Pintola All Natural Peanut Butter Crunchy 1kg ",
        "price": 38800,
        "company": "Pintola",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/41ZgEwnQ8bL._SX300_SY300_QL70_FMwebp_.jpg",
        "description": "100% NATURAL - No Palm Oi l / Non Hydrogenated Oil / No Preservatives / No Artificial Flavour / Made with just one ingredient Hand selected Premium Roasted Peanuts. Our USFDA-approved and gluten-free peanut butter is a smart choice! Made with non GMO premium peanuts, it's a rich source of fiber, antioxidants & healthy fats.",
        "category": "Butter",
        "stars": 4.2,
        "reviews": 304,
        "stock": 10
    },
    {
        "id": 20,
        "name": "Pintola Wholegrain & Seeds Muesli with 33% Millet 800g",
        "price": 51100,
        "company": "Pintola",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/91TJmfTb0-L._SX679_.jpg",
        "description": "100% NATURAL - No Palm Oi l / Non Hydrogenated Oil / No Preservatives / No Artificial Flavour / Made with just one ingredient Hand selected Premium Roasted Peanuts. Our USFDA-approved and gluten-free peanut butter is a smart choice! Made with non GMO premium peanuts, it's a rich source of fiber, antioxidants & healthy fats.",
        "category": "Cereals",
        "stars": 4.7,
        "reviews": 77,
        "stock": 15
    },
    {
        "id": 21,
        "name": "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling",
        "price": 109900,
        "company": "Fire-Boltt",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/61AHiYyu3ZL._SX679_.jpg",
        "description": "【1.83 HD Display Smart Watch】- The 46.48mm (1.83-inch) HD display makes the display clear and true-to-life, with vivid colours ensuring smooth readability and keeping the watch as exquisite to look at as when you first lay your eyes on it. The watch has a 280 NITS Peak Brightness",
        "category": "Watch",
        "stars": 4.2,
        "reviews": 103,
        "stock": 7
    },
    {
        "id": 22,
        "name": "ASUS TUF Gaming F15, 15.6 (39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen",
        "price": 6999000,
        "company": "Asus",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/81x9vxrPFwS._SX679_.jpg",
        "description": "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV and one month of Game Pass-including EA Play.",
        "category": "Laptop",
        "stars": 3.9,
        "reviews": 212,
        "stock": 7
    },
    {
        "id": 23,
        "name": "Pintola Peanut Butter Chocolate Flavour Crunchy 1kg ",
        "price": 42500,
        "company": "Pintola",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/71zEYXzxVLL._SX679_.jpg",
        "description": "INDULGE IN YOUR CRAVINGS WITHOUT ANY GUILT. The Dark Chocolate Peanut Butter is a healthy and tasty treat for your taste buds. If you're hungering for chocolate and worried about your health, this is the perfect treat for you.",
        "category": "Butter",
        "stars": 4.3,
        "reviews": 190,
        "stock": 8
    },
    {
        "id": 24,
        "name": "boAt Wave Call 2 Smart Watch with 1.83 HD Display",
        "price": 119900,
        "company": "BoAt",
        "colors": [
            "#22D3EF",
            "#ff0000",
            "#000000"
        ],
        "image": "https://m.media-amazon.com/images/I/61FZ83ArEwL._SX679_.jpg",
        "description": "Screen: 1.83-inch HD display with a square dial offers a full capacitive touch experience, allowing you to easily take control. Peak Brightness: 550 Nits, AMOLED Display: NO",
        "category": "Watch",
        "stars": 3.9,
        "reviews": 124,
        "stock": 7
    }
]

module.exports = Data