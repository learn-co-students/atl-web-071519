Author.destroy_all
Book.destroy_all

john = Author.create(first_name: "John", last_name: "Steinbeck", deceased: true)
milosz = Author.create(first_name: "Czeslaw", last_name: "Milosz", deceased: true)
rowling = Author.create(first_name: "JK", last_name: "Rowling")

hp = Book.create(title: "HP and the Sorcerer's Stone", author_id: rowling.id)
earth = Book.create(title: "Unattainable Earth", author_id: milosz.id)
grapes = Book.create(title: "Grapes of Wrath", author_id: john.id)
