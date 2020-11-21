public class Address {

    public String streetName;
    public String city;
    public int zipCode;

    public Address()
    {
        streetName = "";
        city = "";
        zipCode = 0;
    }
    public Address(String streetName, String city, int zipCode) {
        this.streetName = streetName;
        this.city = city;
        this.zipCode = zipCode;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getZipCode() {
        return zipCode;
    }

    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }
}
