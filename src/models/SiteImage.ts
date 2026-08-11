import mongoose from 'mongoose';

const SiteImageSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      index: true,
    },
    section: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    defaultImageUrl: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    order: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.SiteImage || mongoose.model('SiteImage', SiteImageSchema);
