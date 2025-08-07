class Product:
    def __init__(self, id, name, price, quantity):
        self.id = id
        self.name = name
        self.price = price
        self.quantity = quantity

    def serializer(self):
        return {
            "id" : self.id,
            "name" : self.name,
            "price" : self.price,
            "quantity" : self.quantity
        }
    
class ProductManager:
    def __init__(self):
        self._products = []
        self._next_id = 1

    def create_product(self, name, price, quantity):
        product = Product(self._next_id, name, price, quantity)
        if product:
            self._products.append(product)
            self._next_id += 1
            return product
        return None
    
    def show_products(self):
        return self._products
    
    def get_product_by_id(self, id):
        for product in self._products:
            if id == product.id:
                return product
        return None

    def delete_product(self, id):
        product = self.get_product_by_id(id)
        if product:
            self._products.remove(product)
            return True
        return False
    
    def update_product(self, id, name=None, price=None, quantity=None):
        product = self.get_product_by_id(id)

        if product:
            if name is not None:
                product.name = name
            if price is not None:
                product.price = price
            if quantity is not None:
                product.quantity = quantity
            return product
        return None