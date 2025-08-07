from flask import Blueprint, jsonify, request
from src.models.product import ProductManager

products_bp = Blueprint("products", __name__, url_prefix="/products")

manager = ProductManager()

manager.create_product("coca cola", 1.50, 25)
manager.create_product("Fanta", 1.10, 15)



@products_bp.route("/", methods=["GET"])
def get_products():
    products = manager.show_products()
    return jsonify([p.serializer() for p in products]), 200

@products_bp.route('/<int:id>', methods=['GET'])
def get_by_id(id):
    product = manager.get_product_by_id(id)
    if product:
        return jsonify(product.serializer()),200
    return jsonify({'msg': 'Producto no encontrado'})


@products_bp.route("/", methods=["POST"])
def create_product():
    data = request.get_json()

    if not "name" in data or not "price" in data or not "quantity" in data:
        return jsonify({"msg": "Rellena todos los campos socio"}), 404

    new_product = manager.create_product(data["name"], data["price"], data["quantity"])
    return jsonify(new_product.serializer()), 200


@products_bp.route("/<int:id>", methods=["DELETE"])
def delete_product(id):
    dlt_product = manager.delete_product(id)
    if dlt_product:
        return jsonify({"msg": "Producto eliminado"}), 200
    return jsonify({"msg": "Producto no encontrado"})


@products_bp.route("/<int:id>", methods=["PUT"])
def update_product(id):
    data = request.get_json()
    product = manager.update_product(
        id,
        name=data.get("name"),
        price=data.get("price"),
        quantity=data.get("quantity"),
    )

    if product:
        return jsonify({"msg": "Producto actualizado"}), 200
    return jsonify({"msg": "Producto no encontrado"}), 404
