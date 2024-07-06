import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";

const ReferralModal = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit referral");
      }

      const result = await response.json();
      console.log("Referral submitted successfully:", result);

      onClose();
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert(
        "An error occurred while submitting the referral. Please try again."
      );
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Refer a Course</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <TextField
            label="Referrer's Name"
            fullWidth
            {...register("referrerName", {
              required: "Referrer's Name is required",
            })}
            error={!!errors.referrerName}
            helperText={errors.referrerName?.message}
          />
          <TextField
            label="Referrer's Email"
            fullWidth
            {...register("referrerEmail", {
              required: "Referrer's Email is required",
            })}
            error={!!errors.referrerEmail}
            helperText={errors.referrerEmail?.message}
          />
          <TextField
            label="Referee's Name"
            fullWidth
            {...register("refereeName", {
              required: "Referee's Name is required",
            })}
            error={!!errors.refereeName}
            helperText={errors.refereeName?.message}
          />
          <TextField
            label="Referee's Email"
            fullWidth
            {...register("refereeEmail", {
              required: "Referee's Email is required",
            })}
            error={!!errors.refereeEmail}
            helperText={errors.refereeEmail?.message}
          />
          <TextField
            label="Course Name"
            fullWidth
            {...register("courseName", { required: "Course Name is required" })}
            error={!!errors.courseName}
            helperText={errors.courseName?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ReferralModal;
