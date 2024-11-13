# Parcel_Pilot
lib/
│
├── controllers/
│   ├── auth_controller.dart        # Handles authentication logic
│   ├── home_controller.dart        # Handles home screen state and logic
│   ├── chat_controller.dart        # Handles chat logic and real-time data
│   ├── learning_controller.dart   # Handles learning content logic
│   ├── profile_controller.dart    # Handles user profile data and updates
│
├── models/
│   ├── user_model.dart             # Model for user data
│   ├── message_model.dart          # Model for chat messages
│   ├── course_model.dart           # Model for learning content or courses
│   ├── profile_model.dart          # Model for profile data
│
├── services/
│   ├── auth_service.dart           # Auth-related logic (e.g., login, register, token management)
│   ├── chat_service.dart           # Chat service (e.g., message sending, receiving)
│   ├── learning_service.dart      # Service to fetch learning content or courses
│   ├── profile_service.dart       # Service to handle user profile data
│
├── utils/
│   ├── constants.dart              # App-wide constants (e.g., URLs, keys)
│   ├── validators.dart             # Validation functions (e.g., email, password validation)
│   ├── network_util.dart           # Helper functions for making API calls
│   ├── storage_util.dart           # Utility functions for handling local storage
│
├── views/
│   ├── auth/
│   │   ├── login_view.dart         # Login screen view
│   │   ├── register_view.dart      # Registration screen view
│   │
│   ├── home/
│   │   └── home_view.dart          # Home screen view
│   │
│   ├── chat/
│   │   └── chat_view.dart          # Chat screen view
│   │
│   ├── learning/
│   │   └── learning_view.dart     # Learning content screen view
│   │
│   ├── profile/
│   │   └── profile_view.dart      # Profile screen view
│
├── widgets/
│   ├── bottom_nav_bar.dart        # Bottom navigation bar widget
│   └── custom_widgets.dart        # Any other reusable UI components
│
├── routes/
│   └── app_routes.dart            # Handles routing logic
│
├── res/
│   ├── fonts/                     # Folder for custom fonts
│   │   └── OpenSans-Regular.ttf
│   ├── colors.dart                # File for defining color constants
│
└── main.dart                      # Main app entry point, where GetX bindings are set up
