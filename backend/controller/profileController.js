const {
    errorResponse,
    successResponse,
} = require("../helpers/responseHelper");

const profileService = require("../services/profileServices");

const getProfile = async (req, res) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return errorResponse(
                res,
                "User not found",
                "USER_NOT_FOUND",
                401
            );
        }

        const profile = await profileService.getProfile(userId);

        if (!profile) {
            return errorResponse(
                res,
                "Profile not found",
                "PROFILE_NOT_FOUND",
                404
            );
        }

        return successResponse(
            res,
            "Profile fetched successfully",
            profile,
            200
        );
    } catch (error) {
        console.log("GET PROFILE ERROR:", error);

        return errorResponse(
            res,
            "Something went wrong",
            "INTERNAL_SERVER_ERROR",
            500
        );
    }
};

module.exports = { getProfile };