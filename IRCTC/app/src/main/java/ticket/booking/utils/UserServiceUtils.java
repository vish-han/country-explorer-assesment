package ticket.booking.service;

import org.mindrot.jbcrypt.BCrypt;

public class UserServiceUtils {

    public static String getHashPassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }
    public static boolean checkPassword(String password, String hashPassword) {
        return BCrypt.checkpw(password, hashPassword);
    }
}
