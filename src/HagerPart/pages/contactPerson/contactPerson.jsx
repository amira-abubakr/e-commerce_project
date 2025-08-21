import React from "react";
import "./css/ContactPerson.css"


export default function ContactPerson()
{


    return <div className="ContactPerson">
<div class="form-container">
  <div class="form-section">
    <label for="name">NAME</label>
    <input type="text" id="name" name="name" placeholder="Eg: John Doe"/>
  </div>

  <div class="form-section phone-input">
    <label for="phone">PHONE NUMBER</label>
    <div class="phone-group">
      <div class="country-code-dropdown">
        <select>
          <option value="+1">🇺🇸 (+1)</option>
          <option value="+44">🇬🇧 (+44)</option>
          <option value="+62" selected>🇮🇩 (+62)</option>
          <option value="+81">🇯🇵 (+81)</option>
        </select>
      </div>
      <input type="tel" id="phone" name="phone" placeholder="111-2222-3333"/>
    </div>
  </div>

  <div class="form-section">
    <label for="email">EMAIL</label>
    <input type="email" id="email" name="email" placeholder="Eg: example@example.com"/>
  </div>

  <h3>ADDRESS DETAIL</h3>

  <div class="form-section">
    <label for="address">ADDRESS</label>
    <input type="text" id="address" name="address" placeholder="Eg: ABC Street 12A, West Java, Indonesia"/>
  </div>

  <div class="form-section">
    <label for="country">COUNTRY</label>
    <select id="country" name="country">
      <option value="" disabled selected>--Choose Country--</option>
      <option value="ID">Indonesia</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
    </select>
  </div>

  <div class="form-row">
    <div class="form-section">
      <label for="state">STATE/PROVINCE</label>
      <select id="state" name="state">
        <option value="" disabled selected>--Choose Province--</option>
        <option value="west-java">West Java</option>
        <option value="jakarta">Jakarta</option>
        <option value="bali">Bali</option>
      </select>
    </div>

    <div class="form-section">
      <label for="zipcode">ZIP CODE</label>
      <select id="zipcode" name="zipcode">
        <option value="" disabled selected>--Choose ZIP Code--</option>
        <option value="40000">40000</option>
        <option value="12000">12000</option>
        <option value="80361">80361</option>
      </select>
    </div>
  </div>
</div>
    </div>
}