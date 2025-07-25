require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./models/books");

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: ["Classic", "Fiction"],
    year_published: 1925,
    description: "A novel about the American dream and the roaring twenties.",
    image_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: ["Classic", "Fiction"],
    year_published: 1960,
    description: "A story of racial injustice and childhood innocence in the Deep South.",
    image_url: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: ["Dystopian", "Science Fiction"],
    year_published: 1949,
    description: "A chilling prophecy about the future and totalitarianism.",
    image_url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: ["Classic", "Romance"],
    year_published: 1813,
    description: "A romantic novel about manners, marriage, and society.",
    image_url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: ["Fantasy", "Adventure"],
    year_published: 1937,
    description: "A fantasy adventure preceding the Lord of the Rings trilogy.",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: ["Classic", "Adventure"],
    year_published: 1851,
    description: "The quest for vengeance against the white whale, Moby Dick.",
    image_url: "https://images.unsplash.com/photo-1463320898484-cdee8141c787",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: ["Classic", "Historical"],
    year_published: 1869,
    description: "A sweeping novel of love and war in Russia.",
    image_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657554504i/290979.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: ["Classic", "Fiction"],
    year_published: 1951,
    description: "A story about teenage rebellion and alienation.",
    image_url: "https://m.media-amazon.com/images/I/7108sdEUEGL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: ["Fantasy", "Adventure"],
    year_published: 1954,
    description: "An epic fantasy adventure in Middle-earth.",
    image_url: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: ["Classic", "Romance"],
    year_published: 1847,
    description: "A coming-of-age story of a strong and independent woman.",
    image_url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: ["Dystopian", "Science Fiction"],
    year_published: 1932,
    description: "A vision of a future society controlled by technology and conditioning.",
    image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBrave_New_World&psig=AOvVaw2caKUgs3y3QmEhsZU4K_xZ&ust=1753513776554000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNDVz_-5144DFQAAAAAdAAAAABAE",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: ["Adventure", "Fiction"],
    year_published: 1988,
    description: "A philosophical story about following your dreams.",
    image_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

async function seedBooks() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log("Seeded 12 books successfully!");
  } catch (err) {
    console.error("Error seeding books:", err);
  } finally {
    mongoose.disconnect();
  }
}

seedBooks(); 