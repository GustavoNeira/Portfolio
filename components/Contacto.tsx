"use client";

import React, { FormEvent } from "react";
import Swal from "sweetalert2";

const Contacto: React.FC = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      access_key: "f21c3cdf-7c64-4807-854c-c9900613984e",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Enviado Correctamente",
          text: "Tu mensaje ha sido enviado exitosamente.",
          icon: "success",
        });
        form.reset(); // Limpiar campos después de enviar
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error al enviar el mensaje.",
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg pt-10">
      <h1 className="text-6xl font-medium ">Contactame</h1>
      <p className="mt-3 text-2xl">Puedes Contactarme a mi correo <span className="text-secondary">Gustavo.neira.paredes@gmail.com</span>  o en el formulario</p>

      <form onSubmit={handleSubmit} className="mt-10">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative z-0">
            <input
              type="text"
              name="name"
              required
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-secondary focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secondary">
            Nombre
            </label>
          </div>

          <div className="relative z-0">
            <input
              type="email"
              name="email"
              required
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-secondary focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secondary">
              Email
            </label>
          </div>

          <div className="relative z-0 col-span-2">
            <textarea
              name="message"
              rows={5}
              required
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-secondary focus:outline-none focus:ring-0"
              placeholder=" "
            ></textarea>
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secondary">
              Mensaje
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 rounded-md bg-secondary hover:bg-secondary/80 px-10 py-2 text-white"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;
