import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Product = {
  name: string;
  slug: string;
  quantity: number;
  price: number;
  image: string;
};

type CartStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  clearProductItem: (slug: string) => void;
  updateProduct: (slug: string, quantity: number) => void;
  clearCart: () => void;
  totalProducts: () => number;
  singleProductTotal: (slug: string) => number;
  removeAProduct: (slug: string) => void;
  totalPrice: () => number;
};

export const CartState = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (product) => {
        const checkIfProductExist = get().products.find(
          (item) => item.slug === product.slug
        );

        if (checkIfProductExist) {
          set({
            products: get().products.map((product) =>
              product.slug === product.slug
                ? {
                    ...product,
                    quantity: product.quantity + 1,
                  }
                : product
            ),
          });
        } else {
          set({
            products: [...get().products, { ...product, quantity: product?.quantity }],
          });
        }
      },
      clearProductItem: (slug) => {
        set({
          products: get().products.filter((product) => product.slug !== slug),
        });
      },
      updateProduct: (slug, quantity) =>
        set({
          products: get().products.map((product) =>
            product.slug === slug ? { ...product, quantity } : product
          ),
        }),
      totalProducts: () =>
        get().products.reduce((count, product) => count + product.quantity, 0),
      singleProductTotal: (slug) => {
        const product = get().products.find((product) => product.slug === slug);
        return product ? product?.quantity : 0;
      },
      clearCart: () => set({ products: [] }),
      removeAProduct: (slug) => {
        const product = get().products.find((product) => product.slug === slug);

        if (!product) return;

        if (product.quantity > 1) {
          set({
            products: get().products.map((product) =>
              product.slug === slug
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          });
        } else {
          set({
            products: get().products.filter((product) => product.slug !== slug),
          });
        }
      },
      totalPrice: () =>
    get().products.reduce((total, product) => total + product.price * product.quantity, 0)
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
