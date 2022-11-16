import Error from "./error";

const PaymentModes = ({ input, handleOnChange }) => {
  const { errors, paymentMethod } = input || {};

  return (
    <div className="pt-5 border-t my-7">
      <h2 className="text-xl font-medium mb-4">Payment Method</h2>
      <div className="mt-3 flex flex-wrap">
        <Error errors={errors} fieldName={"paymentMethod"} />
        {/*Direct bank transfers*/}
        <div className="form-check woo-next-payment-input-container mt-2">
          <div class="flex items-center mr-4">
            <input
              onChange={handleOnChange}
              id="bacs"
              type="radio"
              value="bacs"
              name="paymentMethod"
              checked={"bacs" === paymentMethod}
              class=""
            />
            <label for="bacs" class="ml-2 text-sm font-medium text-gray-900">
              Direct Bank Transfer
            </label>
          </div>
        </div>

        {/*Pay with Paypal*/}
        <div className="form-check woo-next-payment-input-container mt-2">
          <div class="flex items-center mr-4">
            <input
              onChange={handleOnChange}
              id="paypal"
              type="radio"
              value="paypal"
              name="paymentMethod"
              checked={"bacs" === paymentMethod}
              class=""
            />
            <label for="paypal" class="ml-2 text-sm font-medium text-gray-900">
              Pay with Paypal
            </label>
          </div>
        </div>

        {/*Check Payments*/}
        {/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cheque" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cheque' === paymentMethod}/>
					<span className="woo-next-payment-content">Check Payments</span>
				</label>
			</div> */}
        {/*Pay with Stripe*/}
        <div className="form-check woo-next-payment-input-container mt-2">
          <div class="flex items-center mr-4">
            <input
              onChange={handleOnChange}
              id="cod"
              type="radio"
              value="cod"
              name="paymentMethod"
              checked={"bacs" === paymentMethod}
              class=""
            />
            <label for="cod" class="ml-2 text-sm font-medium text-gray-900">
              Cash on Delivery
            </label>
          </div>
        </div>
        {/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="jccpaymentgatewayredirect" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'jccpaymentgatewayredirect' === paymentMethod}/>
					<span className="woo-next-payment-content">JCC</span>
				</label>
			</div> */}
        {/* <div className="form-check woo-next-payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="ccavenue" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'ccavenue' === paymentMethod}/>
					<span className="woo-next-payment-content">CC Avenue</span>
				</label>
			</div> */}
        <div className="form-check woo-next-payment-input-container mt-2">
          <div class="flex items-center mr-4">
            <input
              onChange={handleOnChange}
              id="stripe"
              type="radio"
              value="stripe"
              name="paymentMethod"
              checked={"bacs" === paymentMethod}
              class=""
            />
            <label for="stripe" class="ml-2 text-sm font-medium text-gray-900">
              Stripe
            </label>
          </div>
        </div>
        {/*	Payment Instructions*/}
        {/* <div className="woo-next-checkout-payment-instructions mt-2">
				Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
			</div> */}
      </div>
    </div>
  );
};

export default PaymentModes;
