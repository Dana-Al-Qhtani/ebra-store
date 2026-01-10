"use client";

import { useState } from "react";

type Method = "applepay" | "card" | "cash";

function ApplePayIcon() {
  return (
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="32.5" height="22.5" rx="6" stroke="#111827" />
      <path
        d="M11.2 15.5c-.8 0-1.5-.3-2-.9-.5-.6-.8-1.4-.8-2.4 0-1 .3-1.8.8-2.4.5-.6 1.2-.9 2-.9.7 0 1.3.2 1.9.7.6-.5 1.2-.7 1.9-.7.8 0 1.5.3 2 .9.5.6.8 1.4.8 2.4 0 1-.3 1.8-.8 2.4-.5.6-1.2.9-2 .9-.7 0-1.3-.2-1.9-.7-.6.5-1.2.7-1.9.7Z"
        fill="#111827"
        opacity="0.18"
      />
      <text x="20.5" y="15.3" fontSize="7" fill="#111827" fontFamily="Times New Roman, serif">
        Pay
      </text>
      <text x="14.2" y="15.3" fontSize="7" fill="#111827" fontFamily="Times New Roman, serif">
        
      </text>
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="32.5" height="22.5" rx="6" stroke="#111827" />
      <rect x="3.5" y="6" width="27" height="4" fill="#111827" opacity="0.15" />
      <rect x="4.5" y="13" width="10" height="2" fill="#111827" opacity="0.18" />
      <rect x="4.5" y="16.5" width="7" height="2" fill="#111827" opacity="0.18" />
    </svg>
  );
}

function CashIcon() {
  return (
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden="true">
      <rect x="0.75" y="0.75" width="32.5" height="22.5" rx="6" stroke="#111827" />
      <rect x="4" y="7" width="26" height="10" rx="2" fill="#111827" opacity="0.12" />
      <circle cx="17" cy="12" r="3" fill="#111827" opacity="0.18" />
    </svg>
  );
}

export default function PaymentMethods() {
  const [method, setMethod] = useState<Method>("applepay");

  return (
    <section className="rounded-lg border bg-white p-4">
      <h2 className="text-base font-semibold text-gray-900">Payment method</h2>
      <p className="mt-1 text-sm text-gray-600">Choose how you want to pay.</p>

      <div className="mt-4 grid gap-3">
        <label className="flex cursor-pointer items-center justify-between rounded-md border p-3 hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <ApplePayIcon />
            <div>
              <p className="text-sm font-medium text-gray-900">Apple Pay</p>
              <p className="text-xs text-gray-600">Fast checkout</p>
            </div>
          </div>

          <input
            type="radio"
            name="payment"
            checked={method === "applepay"}
            onChange={() => setMethod("applepay")}
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-md border p-3 hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <CardIcon />
            <div>
              <p className="text-sm font-medium text-gray-900">Credit / Debit Card</p>
              <p className="text-xs text-gray-600">Visa / MasterCard</p>
            </div>
          </div>

          <input
            type="radio"
            name="payment"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-md border p-3 hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <CashIcon />
            <div>
              <p className="text-sm font-medium text-gray-900">Cash</p>
              <p className="text-xs text-gray-600">Pay on delivery</p>
            </div>
          </div>

          <input
            type="radio"
            name="payment"
            checked={method === "cash"}
            onChange={() => setMethod("cash")}
          />
        </label>
      </div>
    </section>
  );
}