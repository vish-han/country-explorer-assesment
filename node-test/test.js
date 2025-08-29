import { Sequelize, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

async function insertTestData() {
  try {
    // Connect to your database using the connection string
    const sequelize = new Sequelize(
      'postgresql://neondb_owner:npg_SaDrqFCgZG89@ep-black-dream-a10fcz0y-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require', 
      {
        dialect: 'postgres',
        logging: false,
        define: {
          underscored: true,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      }
    );

    // Test the connection
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Initialize User model inline
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      walletAddress: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      referralCode: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      totalPoints: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      confirmedReferralPoints: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      nodePoints: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      boostNodePoints: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      rewardPoints: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      level: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      lastClaimed: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true,
      },
      lastResync: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true,
      },
      dailyStreak: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      updateNotification: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      twitterId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isTwitterVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      cliNodePoints: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      cliBoostNodePoints: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false,
      }
    }, {
      tableName: 'users',
      timestamps: true,
    });

    // Initialize UserPoint model inline
    const UserPoint = sequelize.define('UserPoint', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      confirmationPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      proof: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,  // Using STRING instead of ENUM to support more types
        allowNull: false,
      },
      subType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      confirmed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    }, {
      tableName: 'user_points',
      timestamps: true,
    });

    // Initialize Notification model inline
    const Notification = sequelize.define('Notification', {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      notificationMessage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      context: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {},
      },
      isRead: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    }, {
      tableName: 'notifications',
      timestamps: true,
    });

    // Define relationships
    User.hasMany(UserPoint, { foreignKey: 'userId', as: 'points' });
    UserPoint.belongsTo(User, { foreignKey: 'userId' });
    
    User.hasMany(Notification, { foreignKey: 'userId', as: 'notifications' });
    Notification.belongsTo(User, { foreignKey: 'userId' });

    // Sync models with the database (use with caution in production)
    await sequelize.sync({ alter: true }); // This updates existing tables if needed

    // Sample data from the pasted JSON
    const userData = {
      id: uuidv4(),
      walletAddress: "0xfD1cD7b7B0D9247a9b8Ee50DD664982309a5afF5",
      referralCode: "1ZcSTeYJ",
      totalPoints: 0,
      confirmedReferralPoints: 0,
      nodePoints: 141939,
      boostNodePoints: 283878,
      rewardPoints: 24000,
      level: 3,
      lastClaimed: null,
      lastResync: null,
      dailyStreak: 1,
      updateNotification: {
        message: "Due to an unexpected auto stop node failure between UTC 13-03-2025 23:40:07 and UTC 14-03-2025 05:10:00, your boost node points were temporarily overstated. We've now corrected everything so your final boost node points total is 51210."
      },
      twitterId: null,
      isTwitterVerified: false,
      cliNodePoints: 0,
      cliBoostNodePoints: 0,
      createdAt: new Date("2025-03-01T11:50:28.636Z"),
      updatedAt: new Date("2025-03-26T08:04:53.135Z")
    };

    // Insert the user
    const [user, userCreated] = await User.findOrCreate({
      where: { walletAddress: userData.walletAddress },
      defaults: userData
    });

    console.log(userCreated ? 'User created' : 'User already exists');
    console.log('User ID:', user.id);

    // Define the referrals from the pasted JSON
    const referrals = [
      {
        id: uuidv4(),
        userId: user.id,
        verified: false,
        points: 8000,
        confirmationPoints: 0,
        type: "reward",
        subType: "nft-mint",
        proof: null,
        confirmed: true,
        createdAt: new Date("2025-03-04T21:03:58.276Z"),
        updatedAt: new Date("2025-03-04T21:03:58.276Z")
      },
      // ... other referrals (keeping the existing ones)
    ];

    // Clear existing points for this user to avoid duplicates
    await UserPoint.destroy({
      where: {
        userId: user.id
      }
    });
    console.log('Cleared existing user points');

    // Insert all referrals (UserPoints)
    for (const referral of referrals) {
      await UserPoint.create(referral);
    }

    console.log(`${referrals.length} referrals added successfully`);

    // Sample notification data for the user
    const notifications = [
      {
        userId: user.id,
        notificationMessage: "Welcome to our platform! Thanks for joining.",
        context: {
          type: "welcome",
          actionRequired: false,
          priority: "normal"
        },
        isRead: false,
        isDelete: false,
        createdAt: new Date("2025-03-01T11:55:28.636Z"),
        updatedAt: new Date("2025-03-01T11:55:28.636Z")
      },
      {
        userId: user.id,
        notificationMessage: "Your node is running successfully!",
        context: {
          type: "node",
          actionRequired: false,
          priority: "normal",
          nodeId: "node_12345"
        },
        isRead: true,
        isDelete: false,
        createdAt: new Date("2025-03-05T14:30:28.636Z"),
        updatedAt: new Date("2025-03-05T15:22:18.636Z")
      },
      {
        userId: user.id,
        notificationMessage: "Congratulations! You've reached level 3.",
        context: {
          type: "level-up",
          actionRequired: false,
          priority: "high",
          previousLevel: 2,
          newLevel: 3
        },
        isRead: false,
        isDelete: false,
        createdAt: new Date("2025-03-10T09:15:28.636Z"),
        updatedAt: new Date("2025-03-10T09:15:28.636Z")
      },
      {
        userId: user.id,
        notificationMessage: "Your account requires verification. Please upload your ID within 24 hours.",
        context: {
          type: "verification",
          actionRequired: true,
          priority: "high",
          dueDate: "2025-03-27T12:00:00Z"
        },
        isRead: false,
        isDelete: false,
        createdAt: new Date("2025-03-26T12:00:28.636Z"),
        updatedAt: new Date("2025-03-26T12:00:28.636Z")
      },
      {
        userId: user.id,
        notificationMessage: "You've received 100 tokens from user @cryptoWhale",
        context: {
          type: "transaction",
          actionRequired: false,
          priority: "normal",
          transactionId: "tx_8a7b6c5d4e3f2g1h",
          amount: 100,
          sender: "0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF"
        },
        isRead: false,
        isDelete: false,
        createdAt: new Date("2025-03-26T16:45:28.636Z"),
        updatedAt: new Date("2025-03-26T16:45:28.636Z")
      }
    ];

    // Clear existing notifications for this user to avoid duplicates
    await Notification.destroy({
      where: {
        userId: user.id
      }
    });
    console.log('Cleared existing user notifications');

    // Insert all notifications
    for (const notification of notifications) {
      await Notification.create(notification);
    }

    console.log(`${notifications.length} notifications added successfully`);
    console.log('Test data inserted successfully!');
    
    // Close the connection
    await sequelize.close();
    
  } catch (error) {
    console.error('Error inserting test data:', error);
  }
}

// Run the function
insertTestData();