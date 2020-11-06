import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@ComponentScan({"com.TeamL.demo"})
public class Food4HelpApplication
{
//	private static final Log log = LogFactory.getLog(Food4HelpApplication.class);
	public static void main(String[] args)
	{
		SpringApplication.run(Food4HelpApplication.class, args);
	}

}
