import java.util.Objects;
public class Message {

    private String username;
    private String text;

    public Message() {
    }

    public Message(String username, String text) {
        this.username = username;
        this.text = text;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Message that = (Message) o;
        return Objects.equals(username, that.username) &&
                Objects.equals(text, that.text);

    }

    @Override
    public int hashCode() {
        return Objects.hash(username, text);
    }
}