import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RegistroPedidoSchema = Schema({
    pedido: { type: Schema.Types.ObjectId, ref: "Pedido", required: true },
    tipo: { type: String, required: true },
    situacao: { type: String, required: true },
    data: { type: Date, default: Date.now },
    payload: { type: Object }
}, {  timestamps: true });

export default mongoose.model("RegistroPedido", RegistroPedidoSchema);